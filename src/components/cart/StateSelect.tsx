import { useId } from 'react'
import Select, { type GroupBase, type StylesConfig } from 'react-select'
import { usStates } from '../../data/usStates'
import { stateSelectTheme } from './stateSelectTheme'

export type StateOption = { value: string; label: string }

const stateOptions: StateOption[] = usStates.map((state) => ({
  value: state.code,
  label: state.name,
}))

type Theme = typeof stateSelectTheme

function createStateSelectStyles(theme: Theme): StylesConfig<StateOption, false, GroupBase<StateOption>> {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: '42px',
      borderRadius: '0.75rem',
      borderColor: state.isFocused ? theme.accent : '#e5e7eb',
      boxShadow: state.isFocused ? `0 0 0 2px ${theme.focusRing}` : 'none',
      backgroundColor: '#ffffff',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      '&:hover': {
        borderColor: state.isFocused ? theme.accent : '#d1d5db',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '2px 14px',
    }),
    singleValue: (base) => ({
      ...base,
      color: theme.text,
      margin: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: theme.textMuted,
      margin: 0,
    }),
    input: (base) => ({
      ...base,
      color: theme.text,
      margin: 0,
      padding: 0,
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? theme.accent : theme.textMuted,
      padding: '0 12px',
      '&:hover': { color: theme.accent },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '0.75rem',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      boxShadow:
        '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
      zIndex: 250,
    }),
    menuList: (base) => ({
      ...base,
      padding: '6px',
      maxHeight: '220px',
    }),
    option: (base, state) => ({
      ...base,
      fontSize: '0.875rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      color: theme.text,
      backgroundColor: state.isSelected
        ? theme.accentSoft
        : state.isFocused
          ? theme.menuBg
          : '#ffffff',
      fontWeight: state.isSelected ? 600 : 400,
      '&:active': {
        backgroundColor: theme.accentSoft,
      },
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 250,
    }),
  }
}

type StateSelectProps = {
  id?: string
  value: string
  onChange: (value: string) => void
}

export function StateSelect({ id, value, onChange }: StateSelectProps) {
  const fallbackId = useId()
  const inputId = id ?? fallbackId

  return (
    <Select<StateOption>
      inputId={inputId}
      instanceId={inputId}
      options={stateOptions}
      value={stateOptions.find((option) => option.value === value) ?? null}
      onChange={(option) => onChange(option?.value ?? '')}
      placeholder="Select"
      isSearchable
      isClearable={false}
      styles={createStateSelectStyles(stateSelectTheme)}
      menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
      menuPosition="fixed"
      classNamePrefix="polisupport-state"
      noOptionsMessage={() => 'No state found'}
      filterOption={(option, input) =>
        option.label.toLowerCase().includes(input.toLowerCase()) ||
        option.value.toLowerCase().includes(input.toLowerCase())
      }
    />
  )
}
