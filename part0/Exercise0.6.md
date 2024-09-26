```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST to new_note_spa to server
    activate server
    server-->>browser: Responds with code 201 Created
    deactivate server


    browser->>server: Rerender note list and send new list to server


    ```