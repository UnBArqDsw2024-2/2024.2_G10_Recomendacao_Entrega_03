COMPOSE_FILE = compose.yaml

DEV_SERVICE = dev
PROD_SERVICE = prod

.PHONY: build-dev
build-dev:
	@echo "🔨 Construindo o serviço de desenvolvimento..."
	docker compose -f $(COMPOSE_FILE) build $(DEV_SERVICE)

.PHONY: build-prod
build-prod:
	@echo "🔨 Construindo o serviço de produção..."
	docker compose -f $(COMPOSE_FILE) build $(PROD_SERVICE)

.PHONY: up-dev
up-dev:
	@echo "🚀 Iniciando o serviço de desenvolvimento..."
	docker compose -f $(COMPOSE_FILE) up $(DEV_SERVICE)

.PHONY: up-prod
up-prod:
	@echo "🚀 Iniciando o serviço de produção..."
	docker compose -f $(COMPOSE_FILE) up $(PROD_SERVICE)

.PHONY: stop
stop:
	@echo "🛑 Parando todos os serviços..."
	docker compose -f $(COMPOSE_FILE) stop

.PHONY: down
down:
	@echo "🧹 Removendo todos os serviços..."
	docker compose -f $(COMPOSE_FILE) down

.PHONY: logs-dev
logs-dev:
	@echo "📋 Exibindo logs do serviço de desenvolvimento..."
	docker compose -f $(COMPOSE_FILE) logs -f $(DEV_SERVICE)

.PHONY: logs-prod
logs-prod:
	@echo "📋 Exibindo logs do serviço de produção..."
	docker compose -f $(COMPOSE_FILE) logs -f $(PROD_SERVICE)

.PHONY: clean
clean:
	@echo "🧹 Removendo containers, volumes e redes..."
	docker compose -f $(COMPOSE_FILE) down --volumes --remove-orphans
	@echo "🧹 Limpando recursos não utilizados do Docker..."
	docker system prune -f
