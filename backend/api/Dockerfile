FROM eclipse-temurin:17-jdk-jammy as build
WORKDIR /api

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:go-offline

COPY src ./src

RUN ./mvnw clean install


FROM eclipse-temurin:17-jdk-jammy as prod
WORKDIR /api

EXPOSE 8080

COPY --from=build /api/target/*.jar app.jar

CMD [ "java", "-jar", "app.jar" ]
