import * as React from 'react';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import classNames from 'classnames';
import { CaretDown, ChevronDown } from '../icons';
import { IconButton } from '../IconButton';
import PlusIcon from '../icons/Plus';
import { SelectItemProps } from './SelectItem';

export interface SelectProps {
  children: React.ReactElement<SelectItemProps>[];
  onChange?: (selectedItem: UseComboboxStateChange<SelectItemProps>) => void;
  addNewButton?: boolean;
  addNewText?: string;
  onClickAddNew?: (e: React.MouseEvent) => void;
}

export const Select = React.forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const { addNewText, addNewButton, onClickAddNew, onChange, children } = props;
  const items = React.Children.map(children, (child) => ({
    ...child.props
  }));
  const itemToString = (item: SelectItemProps | null) => {
    return item ? item.title ?? item.value : '';
  };
  const [inputItems, setInputItems] = React.useState(items);
  const buttonContainerRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);

  const setItemListHeight = () => {
    if (inputItems.length >= 6) {
      const height = buttonContainerRef.current?.offsetHeight;
      if (height && menuRef.current) {
        // max-height for dropdown is 352px
        const newHeight = (352 - height).toString();
        menuRef.current.style.height = `${newHeight}px`;
      }
    } else if (menuRef.current) {
      menuRef.current.style.height = 'auto';
    }
  };

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    openMenu,
    closeMenu
  } = useCombobox({
    items: inputItems,
    itemToString,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          inputValue
            ? item.value.toLowerCase().startsWith(inputValue.toLowerCase()) ||
              item.title?.toLowerCase().startsWith(inputValue.toLowerCase())
            : true
        )
      );
      setItemListHeight();
    },
    onIsOpenChange: setItemListHeight,
    onSelectedItemChange: onChange
  });
  return (
    <div>
      <div
        {...getComboboxProps({
          className: 'w-full flex ring-1 ring-primary-300 rounded focus-within:ring-2'
        })}
      >
        <input
          {...getInputProps({
            ref,
            className: 'w-full pl-4 pr-10 py-3.5 focus:outline-none rounded',
            onClick: () => (!isOpen ? openMenu() : closeMenu())
          })}
        />
        <IconButton variant='text' {...getToggleButtonProps()} color='warning'>
          <CaretDown />
        </IconButton>
      </div>
      <div
        {...getMenuProps({
          className: classNames('ring-primary-300 mt-1 rounded max-h-88', {
            ['ring-1']: isOpen
          })
        })}
      >
        {isOpen && (
          <>
            <ul ref={menuRef} className='overflow-auto'>
              {inputItems.map((item, index) => (
                <li
                  {...getItemProps({
                    item,
                    index,
                    key: `${item.value}${index}`,
                    disabled: item.groupHeader || item.disabled
                  })}
                  className={classNames(
                    'px-4 py-3.5 text-tertiary-700 first:rounded-t last:rounded-b cursor-pointer',
                    {
                      ['bg-primary-100']: highlightedIndex === index || selectedItem === item,
                      ['font-bold']: item.groupHeader,
                      ['border-t-2 border-primary-300']: item.groupHeader && index != 0,
                      ['cursor-not-allowed']: item.groupHeader || item.disabled
                    }
                  )}
                  key={`${item.value}${index}`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            {isOpen && (inputItems.length > 6 || addNewButton) && (
              <div className='sticky bottom-0 overflow-hidden rounded-b' ref={buttonContainerRef}>
                {inputItems.length > 6 && (
                  <div className='w-full bg-neutral-100 flex items-center justify-center h-6 shadow'>
                    <ChevronDown color='warning' size='medium' />
                  </div>
                )}
                {addNewButton && (
                  <div className='bg-neutral-100 border-t-2 border-primary-300'>
                    <button
                      className={classNames(
                        'w-full py-3 px-5',
                        'font-base inline-flex items-center transition',
                        'rounded-b text-tertiary-700 outline-none bg-neutral-100',
                        'focus:ring ring-inset active:shadow-none disabled:bg-neutral-600'
                      )}
                      onClick={onClickAddNew}
                    >
                      <span className='inline-flex mr-2'>
                        <PlusIcon color='warning' />
                      </span>
                      {addNewText}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
});
