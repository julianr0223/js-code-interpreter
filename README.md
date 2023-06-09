# JS Code interpreter Plugin

This project is a REST API created with Next.js designed to be used in the creation of a chatGPT plugin. The API exposes a POST endpoint that allows you to send JavaScript code. This code is sent to CodeSandbox, which in turn returns a link to a project that implements the sent JavaScript code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 16 or higher)
- npm
- Docker (optional)

### Installing

Clone the repository to your local machine:

```bash
git clone git@github.com:julianr0223/js-code-interpreter.git
```

Navigate into the project directory:

```bash
cd js-code-interpreter
```

Install the project dependencies:

```bash
npm install
```

### Running the Application locally

You can run the application locally using npm:

```bash
npm run dev
```

Alternatively, you can use Docker to build and run the application:

```bash
docker build -t <your-image-name> .
docker run -p 3000:3000 <your-image-name>
```

Now, the application should be running at `http://localhost:3000`.

## API Usage

To use the API, make a POST request to the `/api/code-interpreter` with your JavaScript code in the request body.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"code":"your-js-code-here"}' http://localhost:3000/api/code-interpreter
```

A json body could be.

```json
{
    "code": "console.log('This was created to run with code sandbox')"
}
```

The API will return a response containing a link to the CodeSandbox project implementing your code.
