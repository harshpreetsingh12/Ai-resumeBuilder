import { Button } from '@/components/ui/button';
import useFetch from '@/hooks/useFetch';
import { Plus } from 'lucide-react';
import React from 'react'
import { createResume } from '../../../../actions/resume';

const DashboardPage = () => {
    const { 
        data: resumeData,
        error,
        fn: createFuncFunction,
        loading: updateDefaultLoading
    } =useFetch(createResume);

  return (
    <div>
       <Button variant="outline">
          New Resume
        <Plus  className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default DashboardPage
