import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SeventhPage() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>MUI Components Demo</h1>

      <Card>
        <CardContent>
          <TextField
            label="Enter your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth

          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => setSubmitted(true)}
          >
            Submit
          </Button>

          {submitted && <p>Hello, {name}!</p>}
        </CardContent>
      </Card>
    </div>
  );
}
