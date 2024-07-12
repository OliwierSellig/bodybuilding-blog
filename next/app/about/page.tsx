import CourseFeatures from '@/components/_About/CourseFeatures';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const currentPath = '/about';
const breadcrumbs = [
  {
    name: 'O nas',
    path: currentPath,
  },
];

export default function page() {
  return (
    <>
      <Breadcrumbs data={breadcrumbs} />
      <CourseFeatures />
    </>
  );
}
