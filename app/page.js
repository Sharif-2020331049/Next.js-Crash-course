import Image from "next/image";

export default function Home() {
  console.log("hello world")
  return (
    <div className="mt-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <p>
        Absolutely! Let me walk you through everything in your code
        step-by-step, like a patient tutor. We will go from the top to bottom and
        cover Next.js, TypeScript, MongoDB (Mongoose), Zod validation, email
        sending with Resend, and authentication using NextAuth , so by the end,
        you will feel confident and ready to build your own apps.
        </p> 
      </main>
    </div>
  );
}
