FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /app

COPY src/Api/*.csproj ./src/Api/

WORKDIR /app/src/Api

RUN dotnet tool restore

WORKDIR /app
COPY . .

WORKDIR /app/src/Api

RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["dotnet", "watch", "run", "--urls=http://0.0.0.0:8080"]