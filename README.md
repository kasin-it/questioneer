# Questioneer

Questioneer is a high-performance web application designed to help users prepare for interviews by providing a curated list of questions. Users can answer these questions and receive feedback on their answers. The application features Clerk for authentication, Hugging Face as an LLM provider, and CockroachDB with Prisma as the ORM. Users can also add questions to their favorites and mark them as completed once answered.

### 🚀 Features

Questioneer comes packed with powerful features to enhance your interview preparation experience:

- **Server Actions:** Seamlessly perform various actions on the server side to manage your data efficiently. 🛠️

- **AI Feedback (Hugging Face):** Receive insightful feedback on your answers powered by cutting-edge AI technology from Hugging Face, ensuring you refine your responses effectively. 🤖

- **Filtering:** Easily navigate through the vast collection of questions by applying filters tailored to your preferences, saving you valuable time during your preparation. 🔍

- ⭐ **Favorite Questions:** Mark questions as your favorites to prioritize them for revisiting later, ensuring you focus on the most relevant topics. ⭐

- ✅ **Question Completion Tracking:** Keep track of your progress by marking questions as completed once you've answered them, allowing you to monitor your preparation journey and identify areas for improvement. 📝

With these features, Questioneer empowers you to tackle interviews with confidence and proficiency!


## Local Setup

### Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/kasin-it/questioneer
    cd questioneer
    ```

2. Install project dependencies:

    ```bash
    pnpm install
    ```

3. Prisma generate:

    ```bash
    pnpm dlx prisma generate
    ```

4. Run the project in preview mode:

    ```bash
    pnpm dev
    ```

5. Access the application locally at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```plaintext
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
WEBHOOK_SECRET=
PAGINATION=30

HUGGING_FACE_API_KEY=
```

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
