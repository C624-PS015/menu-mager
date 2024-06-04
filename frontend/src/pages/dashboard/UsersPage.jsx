import { useLocation } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
import { useDebounce } from '@/hooks';
import { toggleModal } from '@/utils';
import { OutlineButton, BaseTable, UserDetailModal } from '@/components';
import { LayoutSection } from '../../layouts';

const USER_DATA = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  role: 'user',
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  phone: `123456789${index}`,
  password: `password${index + 1}`,
  token: `token${index + 1}`,
  avatar: '',
  created_at: new Date(),
  updated_at: new Date(),
  address: {
    id: index + 1,
    user_id: index + 1,
    province: `Province ${index + 1}`,
    district: `District ${index + 1}`,
    sub_district: `Sub District ${index + 1}`,
    post_code: `100${index}`,
    village: `Village ${index + 1}`,
    rt: index + 1,
    rw: index + 1,
    detail_address: `Street ${index + 1}, Number ${index + 1}`,
    created_at: new Date(),
    updated_at: new Date(),
  },
  subscription: [],
}));

export function UsersPage() {
  const query = new URLSearchParams(useLocation().search).get('q');
  const modalId = useId();
  const debouncedQuery = useDebounce(query, 500);
  const [showModal] = toggleModal(modalId);
  const [tableData, setTableData] = useState(USER_DATA);
  const [detailData, setDetailData] = useState(null);

  // will be changed to fetch data from API
  const onUserView = (id) => {
    const user = USER_DATA.find((user) => user.id === id);
    const newUserData = {
      avatar: {
        label: 'Avatar',
        value: user.avatar,
      },
      name: {
        label: 'Name',
        value: user.name,
      },
      email: {
        label: 'Email',
        value: user.email,
      },
      phone: {
        label: 'Phone Number',
        value: user.phone,
      },
      address: {
        label: 'Address',
        value: `${user.address.detail_address}, ${user.address.village}, ${user.address.sub_district}, ${user.address.district}, ${user.address.province}, ${user.address.post_code}`,
      },
      active_subscription: {
        label: 'Active Subscription',
        value:
          user.subscription.length > 0
            ? user.subscription.map((sub) => sub.name).join(', ')
            : 'No active subscription',
      },
    };
    setDetailData(newUserData);
    showModal();
  };

  useEffect(() => {
    if (debouncedQuery) {
      const filteredData = USER_DATA.filter((user) =>
        user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setTableData(filteredData);
    } else {
      setTableData(USER_DATA);
    }
  }, [debouncedQuery]);

  return (
    <LayoutSection>
      <BaseTable heads={['No.', 'Name', 'Email', 'Phone', 'Action']}>
        {tableData &&
          tableData.map((user, index) => (
            <tr
              key={user.id}
              className={`${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <OutlineButton onClick={() => onUserView(user.id)}>View</OutlineButton>
              </td>
            </tr>
          ))}
        {tableData.length === 0 && (
          <tr>
            <td
              colSpan={5}
              className="text-center py-4"
            >
              No data available
            </td>
          </tr>
        )}
      </BaseTable>

      <UserDetailModal
        id={modalId}
        data={detailData}
      />
    </LayoutSection>
  );
}
