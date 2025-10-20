# 🚀 Deploy no Railway - Instituto Spartan

## 📋 **Arquivos Criados para Deploy:**

### 1. **Dockerfile**
- ✅ Build otimizado em múltiplos estágios
- ✅ Imagem base: Node.js 18 Alpine
- ✅ Output standalone do Next.js
- ✅ Usuário não-root para segurança

### 2. **next.config.js**
- ✅ Configurado com `output: 'standalone'`
- ✅ Otimizado para produção

### 3. **railway.json**
- ✅ Configuração do Railway
- ✅ Builder: Dockerfile
- ✅ Política de restart configurada

### 4. **railway.toml**
- ✅ Configuração adicional do Railway
- ✅ Healthcheck configurado
- ✅ Comando de start definido

### 5. **.dockerignore**
- ✅ Arquivos ignorados no build
- ✅ Build mais rápido
- ✅ Imagem menor

## 🚀 **Como Fazer Deploy no Railway:**

### **Opção 1: Via GitHub (Recomendado)**

1. **Fazer commit e push do código:**
```bash
git add .
git commit -m "Preparar para deploy no Railway"
git push origin main
```

2. **No Railway:**
   - Acesse [railway.app](https://railway.app)
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório
   - Railway detectará automaticamente o Dockerfile

### **Opção 2: Via Railway CLI**

1. **Instalar Railway CLI:**
```bash
npm install -g @railway/cli
```

2. **Login:**
```bash
railway login
```

3. **Inicializar projeto:**
```bash
railway init
```

4. **Deploy:**
```bash
railway up
```

### **Opção 3: Via Git Push Direto**

1. **Adicionar remote do Railway:**
```bash
railway link
```

2. **Push para deploy:**
```bash
git push railway main
```

## 🔧 **Variáveis de Ambiente (se necessário):**

No painel do Railway, adicione variáveis de ambiente:
- `NODE_ENV=production`
- `PORT=3000`

## 📊 **Monitoramento:**

- ✅ Logs em tempo real no dashboard do Railway
- ✅ Healthcheck em `/`
- ✅ Restart automático em caso de falha

## 🎯 **Comandos Úteis:**

```bash
# Ver logs
railway logs

# Abrir no navegador
railway open

# Ver status
railway status

# Ver variáveis de ambiente
railway variables
```

## 📝 **Checklist de Deploy:**

- ✅ Dockerfile criado
- ✅ next.config.js configurado
- ✅ railway.json criado
- ✅ .dockerignore criado
- ✅ Código commitado
- ✅ Variáveis de ambiente configuradas (se necessário)

## 🎊 **Após o Deploy:**

1. Railway fornecerá uma URL pública
2. O site estará disponível globalmente
3. Deploys automáticos a cada push no GitHub

---

**🎉 Projeto pronto para deploy no Railway!**
