## Запуск локально
Требуется окружение с python версии 3.9

```
python -m pip install -r reqirements.txt
uvicorn main:app
```

## Запуск в докере
```
docker build -t app .
docker run -p 8000:8000 app
```
