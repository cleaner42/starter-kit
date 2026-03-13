import Heading from '@/components/ui/heading';

const getProjects = async () => {
  // Simulate an API call with a random delay
  const delay = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Implement your data fetching logic here
  return {};
};

export default async function HomePage() {
  // SSR
  // const data = await getProjects();

  return (
    <main>
      <Heading>Hello World</Heading>
    </main>
  );
}
