import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-10 bg-accent text-primary text-xs flex items-center justify-center shadow-[0_0_3px_0] shadow-neutral flex-shrink-0">
      <p>
        Holifield William |{" "}
        <Link className="font-semibold hover:text-neutral transition-colors" href="https://holifield.vercel.app">
          Porfolio
        </Link>{" "}
        | holifield04@gmail.com
      </p>
    </footer>
  );
}
