import NeuroCube from './components/NeuroCube';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     
      
      <div className="relative flex place-items-center">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className='bg-color text-3xl bg-black text-white p-4'>Robert</div>
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          
          <NeuroCube />
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div>
              Footer Herewewe
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
