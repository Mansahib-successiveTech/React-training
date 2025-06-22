import Link from "next/link";
export default function RootLayout({ children }) {
    return (
      <div>
         <Link href="/assignment-1/ques1">
          <button>ques1</button>
        </Link>
        <Link href="/assignment-1/ques2">
          <button>ques2</button>
        </Link>
        <Link href="/assignment-1/ques3">
          <button>ques3</button>
        </Link>
        <Link href="/assignment-1/ques4">
          <button>ques4</button>
        </Link>
        <Link href="/assignment-1/ques5">
          <button>ques5</button>
        </Link>
        <Link href="/assignment-1/ques6">
          <button>ques6</button>
        </Link>
        
        {children}
      </div>
    );
  }
  