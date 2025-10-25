#!/bin/bash

echo "🚀 Starting Pakistan Government Services AI..."

# Kill any existing servers
echo "🔄 Stopping existing servers..."
pkill -f 'node server.js' 2>/dev/null || true
sleep 2

# Start API Server
echo "🔧 Starting API Server on port 3001..."
cd /Users/mutahir/Downloads/FYP-main/my-node-api
PORT=3001 node server.js &
API_PID=$!
echo "✅ API Server started with PID: $API_PID"

# Wait a moment for API to start
sleep 3

# Start Frontend Server
echo "🌐 Starting Frontend Server on port 8080..."
cd /Users/mutahir/Downloads/FYP-main/frontend
node server.js &
FRONTEND_PID=$!
echo "✅ Frontend Server started with PID: $FRONTEND_PID"

# Wait a moment for frontend to start
sleep 2

echo ""
echo "🎉 Both servers are now running!"
echo "📱 Open your browser and visit: http://localhost:8080"
echo "🔧 API Server: http://localhost:3001"
echo ""
echo "🧪 Test credentials:"
echo "   Email: webtest@example.com"
echo "   Password: test123"
echo ""
echo "🛑 To stop servers, run: pkill -f 'node server.js'"
echo ""

# Keep script running to show status
while true; do
    sleep 30
    echo "⏰ Servers still running... (Press Ctrl+C to exit)"
done
