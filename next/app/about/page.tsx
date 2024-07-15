import CourseFeatures from '@/components/_About/CourseFeatures';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

const currentPath = '/about';
const breadcrumbs = [
  {
    name: 'O nas',
    path: currentPath,
  },
];

export const metadata: Metadata = {
  title: 'O nas',
};

export default function page() {
  return (
    <>
      <Breadcrumbs data={breadcrumbs} />
      <CourseFeatures />
    </>
  );
}
