export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white p-6">
      {/* عنوان اصلی */}
      <h1 className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md">
My Next.js Blog Project    </h1>

      {/* توضیح کوتاه */}
      <p className="text-gray-300 text-lg text-center max-w-xl mb-10">
This was my first Next.js project, where I learned about dynamic routing, server-side data fetching, and Tailwind CSS styling.

      </p>

      {/* افکت تزئینی پایین صفحه */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}
