FROM python:3.14.0a4-alpine3.21

RUN mkdir /app

WORKDIR /app

RUN pip install --upgrade pip 

COPY requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
