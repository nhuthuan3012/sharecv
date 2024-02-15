1. Mở terminal trong folder chính của project
2. Chạy lệnh "npm install" hoặc "yarn install" trong terminal để cài đặt các package cần thiết
3. Chạy lệnh "npm run dev" hoặc "yarn dev" trong terminal để chạy project trong môi trường development
4. Cài đặt các biến môi trường (API server's link, PUBLIC_ID, ...) ở trong file:
    - .evn.development: khi chạy project ở môi trường development.
    - .evn.production: khi chạy project ở môi trường production.
với tiền tố "NEXT_PUBLIC_".
Như trường hợp link của API server sẽ là "NEXT_PUBLIC_API_URL"