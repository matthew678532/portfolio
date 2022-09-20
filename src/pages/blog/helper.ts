import Label from 'components/Label';
import Post from 'groups/Post';

export const parseNodes = (nodes, blogCallback, filterCallback) => {
  const stacks = [];
  const ret = {
    blogs: [],
    filters: []
  };

  nodes.forEach(item => {
    const { excerpt, frontmatter } = item;
    const { slug, stack } = frontmatter;

    if (!stacks.includes(stack)) {
      const index = stacks.length;
      console.info('Index from within: ', index);

      const Filter = {
        Component: Label,
        props: {
          active: false,
          stack,
          isClickable: true,
          onClick: (e) => filterCallback(e, stack, index)
        }
      };
  
      stacks.push(stack);
      ret.filters.push(Filter);
    }

    const BlogPost = {
      Component: Post,
      props: {
        imageSrc: '',
        excerpt,
        slug,
        stack,
        callback: blogCallback
      }
    };

    ret.blogs.push(BlogPost);
  });

  return ret;
};

const removeFilter = (filters, filterIndex) => {
  const newFilters = [ ...filters ];
  const filter = newFilters[filterIndex];
  filter.props = {
    ...filter.props,
    active: false
  };

  return newFilters;
};

const addFilter = (filters, filterIndex) => {
  console.info('Filter index = ', filterIndex);
  const newFilters = [ ...filters ];
  const filter = newFilters[filterIndex];
  filter.props = {
    ...filter.props,
    active: true
  };

  return newFilters;
};

const filterBlogs = (filterName, allBlogs) => {
  return allBlogs.filter(blog => blog.props.stack === filterName);
};

export const filterClickHandler = (
  filter,
  filterIndex,
  activeFilter,
  setFilters,
  setBlogs,
  allBlogs
) => {
  const oldFilter = activeFilter.current;

  if (activeFilter.current.filter) {
    if (activeFilter.current.filter === filter) {
      activeFilter.current = {
        filter: '',
        filterIndex: -1
      };

      setFilters(prevState => removeFilter(prevState, filterIndex));
      setBlogs(allBlogs);
    } else {
      activeFilter.current = { filter, filterIndex };

      setFilters(prevState => {
        const tempState = removeFilter(prevState, oldFilter.filterIndex);
        return addFilter(tempState, filterIndex);
      });
      setBlogs(filterBlogs(filter, allBlogs));
    }
  } else {
    activeFilter.current = { filter, filterIndex };

    setFilters(prevState => addFilter(prevState, filterIndex));
    setBlogs(filterBlogs(filter, allBlogs));
  }
};
