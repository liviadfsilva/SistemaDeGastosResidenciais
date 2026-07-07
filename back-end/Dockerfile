FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /app

# copia só os projetos primeiro
COPY src/Api/*.csproj ./src/Api/

WORKDIR /app/src/Api
RUN dotnet restore

# copia o resto do código
WORKDIR /app
COPY . .

WORKDIR /app/src/Api

EXPOSE 8080

CMD ["dotnet", "watch", "run", "--urls=http://0.0.0.0:8080"]