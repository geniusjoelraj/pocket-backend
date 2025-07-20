package main

import (
    "log"
    "os"
    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()
    
    // Set the data directory to a persistent location
    app.DataDir = "./pb_data"
    
    // Get port from environment (Render sets this)
    port := os.Getenv("PORT")
    if port == "" {
        port = "8090"
    }
    
    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        e.Server.Addr = ":" + port
        return nil
    })
    
    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
