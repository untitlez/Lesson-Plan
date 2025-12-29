"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { routes } from "@/lib/routes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HomeProps {
  images: string;
}

export const Home = ({ images }: HomeProps) => {
  return (
    <div className="relative min-h-svh flex items-center justify-center bg-muted">
      {/* Background Image */}
      {images && (
        <Image
          src={images}
          alt="Lesson"
          className="object-cover"
          sizes="100vw"
          loading="eager"
          priority
          fill
        />
      )}

      <Card className="bg-background/80 backdrop-blur w-full max-w-md m-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">ยินดีต้อนรับ👋</CardTitle>
          <CardDescription className="text-base">
            เริ่มต้นการใช้งานระบบแผนการสอนได้เลย
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:gap-6">
          <Button asChild className="btn py-6 sm:py-8 text-base sm:text-lg">
            {!images ? (
              <div>
                <Loader2 className="size-4 animate-spin" />
                Loading...
              </div>
            ) : (
              <Link href={routes.pages.lessonPlan}>สร้างแผนการสอน</Link>
            )}
          </Button>

          <Button
            asChild
            variant="outline"
            className="btn py-6 sm:py-8 text-base sm:text-lg hover:text-chart-5"
          >
            <Link href={routes.pages.auth.signin}>เข้าสู่ระบบ</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
