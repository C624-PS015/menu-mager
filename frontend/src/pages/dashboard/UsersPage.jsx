import { useId, useState } from 'react';
import { HiEye } from 'react-icons/hi';
import { useFilterData } from '@/hooks';
import { toggleModal } from '@/utils';
import { BaseTable, UserDetailModal, IconButton } from '@/components';
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
  const modalId = useId();
  const [detailData, setDetailData] = useState(null);
  const [showModal] = toggleModal(modalId);
  const tableData = useFilterData(USER_DATA);

  // will be changed to fetch data from API
  const onUserView = (id) => {
    const user = USER_DATA.find((selectedUser) => selectedUser.id === id);
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
        value: [
          user.address.detail_address,
          user.address.village,
          user.address.sub_district,
          user.address.district,
          user.address.province,
          user.address.post_code,
        ].join(', '),
      },
      active_subscription: {
        label: 'Active Subscription',
        value:
          user.subscription.length > 0 ? user.subscription.map((sub) => sub.name).join(', ') : 'No active subscription',
      },
    };
    setDetailData(newUserData);
    showModal();
  };

  return (
    <LayoutSection>
      <BaseTable heads={['No.', 'Name', 'Email', 'Phone', 'Action']}>
        {tableData &&
          tableData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <IconButton
                  label="View"
                  icon={<HiEye className="text-gray-500" />}
                  onClick={() => onUserView(user.id)}
                />
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
