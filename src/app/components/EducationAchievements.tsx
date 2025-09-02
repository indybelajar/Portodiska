
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationAchievements = () => {
  const achievements = [
    {
      title: 'Juara 2 Motivation Contest Majalengka',
      year: 2023,
    },
    {
      title: 'Juara 3 Debat Politik FISIP',
      year: 2024,
    },
    {
      title: 'Top 10 Duta Lingkungan Jawa Barat',
      year: 2024,
    },
    {
      title: 'Publikasi Jurnal: Pemberdayaan UMKM dengan TikTok Ads: Central Bedug',
      year: 2024,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">
            Pendidikan <span className="text-white">& Prestasi</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Riwayat pendidikan dan beberapa pencapaian penting yang pernah diraih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pendidikan */}
          <Card className="card-shadow bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Universitas Majalengka</CardTitle>
                <GraduationCap className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-sm text-gray-400">S1 Ilmu Komunikasi (2021–2025)</p>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-xs text-yellow-300 flex items-center gap-1">
                <BookOpen className="h-3 w-3" /> Komunikasi & Media
              </Badge>
            </CardContent>
          </Card>

          {/* Prestasi */}
          <Card className="card-shadow bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Prestasi</CardTitle>
                <Award className="h-5 w-5 text-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-white">
                {achievements.map((item, index) => (
                  <li key={index}>
                    <span className="font-medium text-yellow-300">{item.year}</span> – {item.title}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
