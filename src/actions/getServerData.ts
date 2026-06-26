'use server';

// Esta função roda estritamente no lado do servidor
export async function getServerData(): Promise<string> {
  // Simula latência de acesso a banco de dados ou API externa no servidor
  await new Promise(resolve => setTimeout(resolve, 800));
  return 'Hello from Server Functions! This data was fetched securely on the server.';
}
