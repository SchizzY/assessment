"use client";

import { CreateIssueForm } from "./components/CreateIssueForm";
import ListIssues from "./components/ListIssues";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#2D3142] mb-8">
          Issue tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#2D3142]">
              Create issue
            </h2>
            <CreateIssueForm />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#2D3142]">Issues</h2>
            <ListIssues />
          </div>
        </div>
      </div>
    </main>
  );
}
