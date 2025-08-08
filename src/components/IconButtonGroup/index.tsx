import { iconButtons } from "./iconButtons";

const IconButtonGroup = () => {
  return (
    <div className="flex gap-5 pr-5">
      {iconButtons.map(({ key, icon: Icon, hasDropdown }) => (
        <a
          key={key}
          href="javascript:void(0);"
          role={hasDropdown ? "button" : undefined}
          className={`relative nav-link p-4 bg-white border border-primary-pink hover:bg-primary-pink rounded-xl transition-colors group ${
            hasDropdown ? "dropdown-toggle" : ""
          }`}
        >
          <Icon className="w-6 h-6 text-blue-55" />
          <div className="absolute -top-1 -right-1">
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-primary-pink"></span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default IconButtonGroup;
