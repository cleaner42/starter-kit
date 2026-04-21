function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
