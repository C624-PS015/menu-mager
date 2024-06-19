import { getSubscriptionPlan, resetSubscriptionPlanState, selectSubscriptionPlan } from '@/slices';
import { LayoutUser } from '@/layouts';
import { Spinner } from '@/components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function ChoosePlanPage() {
  const { data, status, messages } = useSelector(selectSubscriptionPlan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionPlan());

    return () => {
      dispatch(resetSubscriptionPlanState());
    };
  }, [dispatch]);

  if (status === 'loading' || !data)
    return (
      <LayoutUser>
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      </LayoutUser>
    );

  return (
    <LayoutUser>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-xl font-bold">Personalize Your Plan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold">Preference</h2>
            {data &&
              data?.subscription_plan_preferences?.map((item) => (
                <div
                  key={item.preferences.id}
                  className="flex flex-col items-center justify-center gap-2 p-2 border border-gray-200 rounded-md"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full">
                    <img
                      src={`${process.env.BASE_URL}/${item.preferences.photo}`}
                      alt={item.preferences.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <span>{item.preferences.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}
