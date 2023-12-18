# CarCar Dealership Online
CarCar is a microservices-based system developed to manage automobile-related information, services, and sales. The project consists of several microservices including Sales, Service, and Inventory, and a React-based front-end application to interact with these services. 


Team:

* Katrine Lombardo - Service
* Seth Porche - Sales

## Design

The CarCar app is composed of 7 microservices: Inventory, Service, Sales, Service poller, Sales poller, React, and the Database.


### Inventory microservice
The Inventory microservice keeps track of automobile inventory. It contains React components that show list and detail views for automobile manufacturers, vehicle models, and specific automobiles.

The Inventory microservice also include the ability to create, update, and delete automobile manufacturers, vehicle models, and specific automobiles.


### Service microservice

The Service functionality uses ports 8080:8000 and keeps track of service appointments for automobiles and their owners.

The Service app contains React components that show and create technicians and service appointments, in addition to appointment histories.

The RESTful API for each service accommodates POST and GET endpoints for creating and viewing all necessary resources.

The poller microservice updates the AutomobileVO every 60 seconds with updated VINs from the Inventory service.


### Sales microservice

The models for the Sales microservice are AutomobileVO, Customer, Salesperson, and Sale. AutomobileVO is created to keep an object in the sales microservice that can be called upon when creating a Sale, and the API call to create a sale will change the automobile in the inventory to mark it as "Sold". Customers and Salespeople are created relatively easily, with neither of them having any ForeignKey characteristics they can be created at will using the PUT method. Creating a sale is more complex as it has three foreign keys: Salesperson, Customer, and Automobile. This means that the vehicle in question must be in the inventory, and ALSO not be marked as "Sold" in order to be an option in the drop-down menu of automobiles in the Sale Form.

## Getting Started

Follow these steps to run the Car Car App locally:

1. Clone the GitLab repository:

   ```bash
   git clone https://gitlab.com/katrine-lombardo-public/car-car.git
   ```

2. Navigate to the project directory:

   ```bash
   cd car-car
   ```

3. Install dependencies:

   ```bash
   # For backend microservices
   cd backend
   pip install -r requirements.txt
   
   # For the React front-end
   cd ../frontend
   npm install
   ```

4. Configure the PostgreSQL database settings in the respective microservices.

5. Start the microservices:

   ```bash
   # For Inventory API
   cd ../inventory-api
   python app.py
   
   # For Service API
   cd ../service-api
   python app.py
   
   # For Sales API
   cd ../sales-api
   python app.py
   ```

6. Start the React frontend:

   ```bash
   cd ../frontend
   npm start
   ```

7. Open your browser and go to http://localhost:3000 to access CarCar.

Feel free to explore, contribute, and enhance the CarCar experience! If you encounter any issues or have suggestions, please open an issue on this repository.



## Helpful API endpoint information

POST Technicians: http://localhost:8080/api/technicians/
```
{
	"first_name": "Yoshi",
	"last_name": "Montalbano",
	"employee_id": "Y123"
}
```

POST Appointment: http://localhost:8080/api/appointments/
```
{
	"date_time": "2023-10-26T15:39:55.616Z",
	"reason": "Cleaning up dog hair",
	"status": "open",
	"vin": "DOGGO54321",
	"customer": "Domino Lombardo",
	"technician": "Y123"
}
```
PUT Appointment=["cancelled"]: http://localhost:8080/api/appointments/{appointment id}/cancel/
```
{
	"status": "cancelled"
}
```
PUT Appointment=["finished"]: http://localhost:8080/api/appointments/{appointment id}/finish/
```
{
	"status": "finished"
}
```
