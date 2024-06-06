import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import { useId, useState } from 'react';
import { BaseTable, IconButton, RecipeDetailModal } from '@/components';
import { LayoutSection } from '@/layouts';
import { toggleModal } from '@/utils';
import { useFilterData } from '@/hooks';

const RECIPES_DATA = Array.from({ length: 10 }, (_, index) => ({
  id: `recipe-${index + 1}`,
  name: `Recipe ${index + 1}`,
  price: 10000 + index * 1000,
  photo: `https://dummyimage.com/600x400/000/fff&text=Recipe+${index + 1}`,
  description: `This is a description for Recipe ${index + 1}`,
  created_at: new Date(),
  updated_at: new Date(),
  available_food_recipe: [],
  recipe_allergy: [],
  recipe_material: [],
  recipe_preferences: ['Vegetarian', 'Vegan', 'Gluten Free'],
  instruction: [],
  subscription_delivery_recipe: [],
}));

export function RecipesPage() {
  const modalId = useId();
  const [showModal] = toggleModal(modalId);
  const tableData = useFilterData(RECIPES_DATA);
  const [detailData, setDetailData] = useState(null);

  // will be changed to fetch data from API
  const onRecipeView = (id) => {
    const recipe = RECIPES_DATA.find((selectedRecipe) => selectedRecipe.id === id);
    const newRecipeData = {
      avatar: {
        label: 'Photo',
        value: recipe.photo,
      },
      name: {
        label: 'Name',
        value: recipe.name,
      },
      description: {
        label: 'Description',
        value: recipe.description,
      },
      price: {
        label: 'Price',
        value: recipe.price,
      },
      recipe_preferences: {
        label: 'Preferences',
        value: recipe.recipe_preferences.join(', '),
      },
    };
    setDetailData(newRecipeData);
    showModal();
  };

  return (
    <LayoutSection>
      <BaseTable
        heads={['No.', 'Name', 'Preferences', 'Price', 'Action']}
        columnWidths={[null, null, null, null, null]}
        addButtonProps={{ show: true, text: 'Add Recipe', onClick: () => {} }}
      >
        {tableData &&
          tableData.map((recipe, index) => (
            <tr key={recipe.id}>
              <td>{index + 1}</td>
              <td>{recipe.name}</td>
              <td>{recipe.recipe_preferences.join(', ')}</td>
              <td>{recipe.price}</td>
              <td className="flex justify-center gap-1">
                <IconButton
                  label="View"
                  icon={<HiEye className="text-gray-500" />}
                  onClick={() => onRecipeView(recipe.id)}
                />
                <IconButton
                  label="Edit"
                  icon={<HiPencil className="text-blue-500" />}
                  onClick={() => {}}
                />
                <IconButton
                  label="Delete"
                  icon={<HiTrash className="text-red-500" />}
                  onClick={() => {}}
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

      <RecipeDetailModal
        id={modalId}
        data={detailData}
      />
    </LayoutSection>
  );
}
