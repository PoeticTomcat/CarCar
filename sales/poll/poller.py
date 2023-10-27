import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()


from sales_rest.models import AutomobileVO


def get_auto_vo():
    url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)
    for auto in content["autos"]:
        try:
            obj, created = AutomobileVO.objects.update_or_create(
                vin=auto["vin"],
                defaults={
                    "sold": auto["sold"],
                    },
            )
            if created:
                print("Created an automobile object!", obj)
            else:
                print("Updated", obj)
        except:
            print("Did not create nor update an Automobile VO")


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
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
