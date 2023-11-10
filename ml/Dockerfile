FROM tensorflow/tensorflow:2.10.0

WORKDIR app

COPY requirements.txt .
RUN pip install --upgrade pip
RUN python -m pip install -r requirements.txt

COPY download_deps.py .
RUN python download_deps.py

COPY . .

EXPOSE 8000
ENTRYPOINT ["uvicorn", "main:app", "--port=8000", "--host=0.0.0.0"]

