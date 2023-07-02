import { useState, useEffect } from 'react';
import {
  IngredientType,
  useCreateRecipeMutation,
  useGetIngredientsQuery,
} from '../ingredients/api';
import Navigation from '../../components/navigation/Navigation';
import Select, { MultiValue } from 'react-select';
import { Link } from 'react-router-dom';

export default function CreateRecipe() {
  const [name, setName] = useState('');
  const [steps, setSteps] = useState<{ edit: boolean; value: string }[]>([]);
  const [totalCalories, setTotalCalories] = useState<number | null>(null);
  const [comments, setComments] = useState('');
  const [isCommentsOpen, setIsCommentOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<
    MultiValue<{ label: string; value: IngredientType }>
  >([]);

  const [createRecipe, { isLoading }] = useCreateRecipeMutation();

  const { data: ingredients = [], isLoading: isLoadingIngredients } =
    useGetIngredientsQuery();

  const handleSave = async () => {
    await createRecipe({
      name,
      recipeIngredients: selectedIngredients.map((elem) => elem.value._id),
      steps: steps.map((step) => ({ value: step.value })),
      totalCalories,
      comments,
    });
  };

  const handleChangeIngredients = (
    data: MultiValue<{ label: string; value: IngredientType }>
  ) => {
    setSelectedIngredients(data);
  };

  const toggleEditSteps = (index: number) => {
    setSteps((steps) => {
      const stepsCopy = [...steps];
      stepsCopy[index] = {
        ...steps[index],
        edit: !steps[index].edit,
        value: steps[index].value === 'New Step' ? '' : steps[index].value,
      };
      return stepsCopy;
    });
  };

  useEffect(() => {
    console.log(steps, 'STEPS');
  }, [steps]);

  return (
    <div className='flex flex-col w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
      <div className='flex flex-col items-center bg-white grow'>
        <h2 className='w-screen text-lg text-center text-teal-900'>
          Create a Recipe
        </h2>
        <div className='flex flex-col items-center grow gap-y-5'>
          <label
            htmlFor=''
            className='flex flex-col items-center text-center text-teal-900'>
            Name
            <input
              type='text'
              className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              placeholder='Recipe Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label
            htmlFor='file-input'
            className='flex flex-col items-center text-center text-teal-900'>
            Add Picture
            <input
              type='file'
              className='hidden px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              onChange={(e) => setImage(e.target.files && e.target.files[0])}
              id='file-input'
            />
          </label>
          <label
            htmlFor='ingredients'
            className='flex flex-col items-center text-center text-teal-900 w-52'>
            Add Ingredients
            {ingredients && (
              <Select
                options={ingredients}
                placeholder='SelectIngredients'
                value={selectedIngredients}
                onChange={handleChangeIngredients}
                isSearchable={true}
                isMulti
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    // maxWidth: '208px',
                    minWidth: '208px',
                  }),
                }}
              />
            )}
          </label>
          {/* <label
            htmlFor=''
            className='flex flex-col items-center text-center text-teal-900'>
            Calories
            <input
              type='number'
              className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              placeholder='Calories'
              onChange={(e) => setCalories(+e.target.value)}
              value={calories ? calories : undefined}
            />
          </label> */}
          <div className='flex flex-col items-center w-52'>
            <ol className='w-full list-decimal'>
              {steps.length > 0 &&
                steps.map((step, index) =>
                  step.edit === true ? (
                    <li
                      key={index}
                      className='flex flex-row w-full mt-2 gap-x-2'>
                      <input
                        type='text'
                        placeholder='Describe Step'
                        value={step.value}
                        onChange={(e) =>
                          setSteps((steps) => {
                            const stepsCopy = [...steps];
                            stepsCopy.splice(index, 1, {
                              edit: steps[index].edit,
                              value: e.target.value,
                            });
                            return stepsCopy;
                          })
                        }
                        onBlur={() => toggleEditSteps(index)}
                        className='w-full px-2 text-white rounded-md grow basis-0'
                      />
                      <button
                        onClick={() => {
                          setSteps((steps) => {
                            const stepsCopy = [...steps];
                            stepsCopy.splice(index, 1);
                            return stepsCopy;
                          });
                        }}
                        className='px-3 py-1 text-white bg-teal-900 rounded-md'>
                        Del
                      </button>
                    </li>
                  ) : (
                    <li
                      onClick={() => toggleEditSteps(index)}
                      tabIndex={0}
                      key={index}
                      className='mt-2 text-teal-900'>
                      {step.value}
                    </li>
                  )
                )}
            </ol>
            <button
              onClick={() =>
                setSteps((steps) => {
                  const stepsCopy = [...steps];
                  stepsCopy.push({ edit: false, value: 'New Step' });
                  return stepsCopy;
                })
              }
              className='px-3 py-1 mt-4 text-white bg-teal-900 rounded-md shadow w-28'>
              Add Step
            </button>
          </div>

          {!isCommentsOpen && (
            <button
              className='px-3 py-1 text-white bg-teal-900 rounded-md shadow'
              onClick={() => setIsCommentOpen(true)}>
              Add Comments
            </button>
          )}
          {isCommentsOpen && (
            <div className='flex flex-col items-center gap-y-4'>
              <h2 className='w-screen text-lg text-center text-teal-900'>
                Comments
              </h2>
              <div className='flex flex-row justify-center w-52 gap-x-5'>
                <textarea
                  name='comments'
                  id='comments'
                  cols={5}
                  rows={5}
                  className='w-full p-1 rounded-md'
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <button
                className='px-3 py-1 text-white bg-teal-900 rounded-md shadow'
                onClick={() => setIsCommentOpen(false)}>
                Close Comments
              </button>
            </div>
          )}
        </div>
        <div className='flex flex-row gap-y-4'>
          <button
            className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'
            onClick={() => {
              handleSave();
            }}>
            Save
          </button>
          <Link to='/recipes'>
            <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
