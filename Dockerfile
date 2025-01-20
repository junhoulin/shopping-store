# 使用 Node.js 的輕量級 Alpine 映像檔（Node 18 LTS）
FROM node:18.20.5-alpine

# 設置工作目錄
WORKDIR /app

# 複製專案檔案到容器中
COPY . .

# 安裝依賴
RUN npm install

# 建置 Nuxt 3 專案
RUN npm run build

# 暴露應用程式所使用的端口（與 Nuxt 配置保持一致）
EXPOSE 3000

# 設定環境變數
ENV PORT=3000 \
    NODE_ENV=production

# 啟動 Nuxt 3 的生成服務
CMD ["node", ".output/server/index.mjs"]
