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
    url = "http://localhost:8100/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)
    for automobile in content["autos"]:
        try:
            obj, created = AutomobileVO.objects.update_or_create(
                import_href=auto["vin"],
                defaults={
                    "vin": auto["vin"],
                    "sold": auto["sold"],
                    "id": auto["id}"]
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
