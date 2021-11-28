# Identity Service

### Register new user
    1. endpoint: /identity/register
    2. method: POST
    3. payload
    ```
    {
        email: string; // email format
        password: string; // min 6 chars
    }
    ```

### Login user
    1. endpoint: /identity/login
    2. method: POST
    3. payload
    ```
    {
        email: string;
        password: string;
    }
    ```

### Reset password user
    1. endpoint: /identity/reset-password
    2. method: POST
    3. headers
    ```
    {
        Authorization: Bearer jwt_token
    }
    ```
    4. payload
    ```
    {
        password: string; // min 6 chars
    }
    ```

### Verify new user
    1. endpoint : /identity/verify/:token
    2. method: GET
    3. headers
    ```
    {
        Authorization: Bearer jwt_token
    }
    ```

# Tasks

- [] Register
- [] Login
- [] Reset Password
- [] Verify