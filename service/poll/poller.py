import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
from service_rest.models import AutomobileVO

def get_auto_vo():
    url = "http://inventory-api:8100/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)
    for auto in content["automobiles"]:
        print(auto)
        try:
            obj, created = AutomobileVO.objects.update_or_create(
                vin=auto["vin"],
                defaults={
                    "vin": auto["vin"],
                    "sold": auto["sold"],
                    "id": auto["id"]
                }
            )
            if created:
                print("Created an auto VO object", obj)
            else:
                print("Updated, obj")
        except:
            print("Did not create nor update an auto vo")


def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            get_auto_vo()
            pass

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
