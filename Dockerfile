FROM node:19-alpine

# Установка рабочей директории
WORKDIR /app

# Копируем только package.json и package-lock.json для кеширования слоёв
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . ./

# Экспонируем порт (информативно, для документации)
EXPOSE 5173

# Запускаем сервер разработки, доступный снаружи
CMD ["npm", "run", "dev", "--", "--host"]
