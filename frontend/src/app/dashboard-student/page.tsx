"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ItemList from "./components/ItemList";
import Loader from "@/components/ui/loader";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4">
      <div className="flex flex-row justify-center items-start flex-wrap px-4 pt-4 gap-4">
        <Card className="w-[20rem]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-xs text-muted-foreground">Placeholder for dynamic content</p>
          </CardContent>
        </Card>
        <Card className="w-[20rem]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-xs text-muted-foreground">Placeholder for dynamic content</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-1 sm:grid-cols-1 w-full gap-3">
        <Card className="">
          <CardHeader>
            <CardTitle>Upcoming Live Class</CardTitle>
          </CardHeader>
          <CardContent className="pl-1">
            <ItemList />
          </CardContent>
        </Card>
        <br />
        <Card className="">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Latest Projects</CardTitle>
              <CardDescription>
                Recent projects generated by RankBoost AI
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div style={{ maxHeight: "320px", overflowY: "auto" }}>
              <main className="flex flex-col gap-2 lg:gap-2 h-[300px] w-full">
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold tracking-tight">
                      You have no projects
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Projects will show when you start using RankBoost AI
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
