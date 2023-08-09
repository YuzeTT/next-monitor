import ConnectionConfig from '@/components/Index/ConnectionConfig';

export default function Home({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  return (
    <ConnectionConfig />
  )
}
