"use client";

import { Auth } from "@/components/auth";
import { Footer } from "@/components/footer";
import { Modal } from "@/components/modal";
import { Table } from "@/components/table";
import { initSatellite } from "@junobuild/core";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            IC Drive
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Secure file storage on the blockchain
          </p>

          <Auth>
            <Table />
            <Modal />
          </Auth>
        </div>
      </main>

      <Footer />
    </div>
  );
}
