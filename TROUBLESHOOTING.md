# 🔧 Troubleshooting Guide

## Connection Error When Trying to Login

### ✅ **Quick Fix Steps:**

1. **Refresh the webpage**: Press `Ctrl+F5` (or `Cmd+Shift+R` on Mac) to hard refresh
2. **Check browser console**: Press `F12` and look at the Console tab for error messages
3. **Verify servers are running**:

```bash
# Check if API server is running
curl http://localhost:3001/api/ai/chat -X POST -H 'Content-Type: application/json' -d '{"message":"test"}'

# Check if frontend server is running  
curl http://localhost:8080
```

### 🔍 **Debug Steps:**

1. **Open Browser Developer Tools**:
   - Press `F12` or right-click → "Inspect"
   - Go to the "Console" tab
   - Look for any error messages

2. **Check Network Tab**:
   - In Developer Tools, go to "Network" tab
   - Try to login again
   - Look for failed requests (they'll be red)

3. **Test API directly**:
   ```bash
   # Test registration
   curl -X POST http://localhost:3001/api/auth/register \
     -H 'Content-Type: application/json' \
     -d '{"name":"Test","email":"test@example.com","password":"test123"}'
   
   # Test login
   curl -X POST http://localhost:3001/api/auth/login \
     -H 'Content-Type: application/json' \
     -d '{"email":"test@example.com","password":"test123"}'
   ```

### 🚀 **Restart Everything (If Needed):**

```bash
# Stop all servers
pkill -f 'node server.js'

# Start API server
cd /Users/mutahir/Downloads/FYP-main/my-node-api
PORT=3001 node server.js &

# Start frontend server  
cd /Users/mutahir/Downloads/FYP-main/frontend
node server.js &
```

### 📱 **Alternative: Use Test Credentials**

If you're still having issues, you can use these test credentials:

**Email**: `webtest@example.com`  
**Password**: `test123`

This account was created during testing and should work.

### 🌐 **Access Your App:**

- **Web Interface**: http://localhost:8080
- **API Direct**: http://localhost:3001/api

### 💡 **Common Issues:**

1. **CORS Error**: Fixed by updating CORS settings
2. **Port Conflicts**: Make sure ports 3001 and 8080 are free
3. **Browser Cache**: Hard refresh with Ctrl+F5
4. **Firewall**: Make sure localhost connections are allowed

### 🎯 **Success Indicators:**

- Green "Online" status in top-right corner
- Console shows "✅ API connection successful"
- Login/register works without errors
- Chat interface loads after login

**If you're still having issues, check the browser console for specific error messages!**
