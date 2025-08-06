function Heading({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1>{children}</h1>;
}

export default Heading;
