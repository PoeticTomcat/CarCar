# CarCar

Team:

* Katrine Lombardo - Service
* Seth Porche - Sales

## Design

The CarCar app is composed of 7 microservices: Inventory, Service, Sales, Service poller, Sales poller, React, and the Database.


## Service microservice

The Service functionality uses ports 8080:8000 and keeps track of service appointments for automobiles and their owners.

The Service app contains React components that show and create technicians and service appointments, in addition to appointment histories.

The RESTful API for each service accommodates POST and GET endpoints for creating and viewing all necessary resources.

The poller microservice updates the AutomobileVO every 60 seconds with updated VINs from the Inventory service.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

Order of model creation:
-AutomobileVO: vin and sold
-Salesperson: first_name, last_name, employee_id
-Customer: first_name, last_name, address, phone_number
-Sale: Customer FK, Salesperson FK, Automobile FK, price

The models I will be creating for the Sales microservice are AutomobileVO, Customer, Salesperson, and Sale. AutomobileVO is created to keep an object in my sales microservice that I can call upon when I am using my functions to create a Sale, and my API call to create a sale will change the automobile in the inventory to mark it as "Sold". Customers and Salespeople are created relatively easily, with neither of them having any ForeignKey characteristics they can be created at will using the PUT method. Creating a sale is more complex as it has three foreign keys: Salesperson, Customer, and Automobile. This means that the vehicle in question must be in the inventory, and ALSO not be marked as "Sold" in order to be an option in the drop-down menu of automobiles in the Sale Form.


## Helpful API endpoint information

POST Technicians:
```
{
	"first_name": "Yoshi",
	"last_name": "Bergersen",
	"employee_id": "Y123"
}
```

POST Appointment:
```
{
	"date_time": "2023-10-26T15:39:55.616Z",
	"reason": "Definitiely too much dog hair",
	"status": "open",
	"vin": "beepboop",
	"customer": "Domino",
	"technician": "S123"
}
```
PUT Appointment=["cancelled"]:
```
{
	"status": "cancelled"
}
```
PUT Appointment=["finished"]:
```
{
	"status": "finished"
}
```
