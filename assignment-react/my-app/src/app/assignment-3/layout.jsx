import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      {/* Flex container to lay buttons horizontally */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        <Link href={"/assignment-3/ques1"}>
          <button style={buttonStyle}>ques1</button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {children}
    </div>
  );
}

const buttonStyle = {
  padding: "8px 16px",
  cursor: "pointer",
};
