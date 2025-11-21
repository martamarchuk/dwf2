import { MetadataRoute } from 'next';
import { EMPLOYEES } from './data/employees';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitalworkforce.one';

  const employeePages = EMPLOYEES.map((employee) => ({
    url: `${baseUrl}/employee/${employee.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...employeePages,
  ];
}
