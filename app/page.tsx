'use client';

import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Plus, Minus, Globe, DollarSign, TrendingUp, Calculator, ChevronDown, ChevronRight } from 'lucide-react';
import { subscriptions, countries, getCategoryColor, getCategoryName, type Subscription, type Country } from '@/lib/subscriptions';

interface SelectedSubscription {
  subscription: Subscription;
  billing: 'monthly' | 'yearly';
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<SelectedSubscription[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['streaming', 'music', 'productivity', 'gaming', 'news', 'fitness', 'cloud'])
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const addSubscription = (subscription: Subscription) => {
    if (!selectedSubscriptions.find(s => s.subscription.id === subscription.id)) {
      setSelectedSubscriptions([...selectedSubscriptions, { subscription, billing: 'monthly' }]);
    }
  };

  const removeSubscription = (subscriptionId: string) => {
    setSelectedSubscriptions(selectedSubscriptions.filter(s => s.subscription.id !== subscriptionId));
  };

  const toggleBilling = (subscriptionId: string) => {
    setSelectedSubscriptions(selectedSubscriptions.map(s => 
      s.subscription.id === subscriptionId 
        ? { ...s, billing: s.billing === 'monthly' ? 'yearly' : 'monthly' }
        : s
    ));
  };

  const totalMonthly = useMemo(() => {
    return selectedSubscriptions.reduce((total, { subscription, billing }) => {
      const price = subscription.pricing[selectedCountry.code];
      if (!price) return total;
      
      if (billing === 'monthly') {
        return total + price.monthly;
      } else {
        return total + (price.yearly || price.monthly * 12) / 12;
      }
    }, 0);
  }, [selectedSubscriptions, selectedCountry]);

  const totalYearly = totalMonthly * 12;

  const chartData = useMemo(() => {
    const categoryTotals = selectedSubscriptions.reduce((acc, { subscription, billing }) => {
      const price = subscription.pricing[selectedCountry.code];
      if (!price) return acc;
      
      const monthlyPrice = billing === 'monthly' 
        ? price.monthly 
        : (price.yearly || price.monthly * 12) / 12;
      
      acc[subscription.category] = (acc[subscription.category] || 0) + monthlyPrice;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryTotals).map(([category, value]) => ({
      name: getCategoryName(category),
      value: Number(value.toFixed(2)),
      color: getCategoryColor(category),
    }));
  }, [selectedSubscriptions, selectedCountry]);

  const groupedSubscriptions = useMemo(() => {
    return subscriptions.reduce((acc, subscription) => {
      if (!acc[subscription.category]) {
        acc[subscription.category] = [];
      }
      acc[subscription.category].push(subscription);
      return acc;
    }, {} as Record<string, Subscription[]>);
  }, []);

  // Calculate category stats
  const getCategoryStats = (category: string, subs: Subscription[]) => {
    const selectedCount = selectedSubscriptions.filter(s => s.subscription.category === category).length;
    const totalCount = subs.length;
    const categoryTotal = selectedSubscriptions
      .filter(s => s.subscription.category === category)
      .reduce((total, { subscription, billing }) => {
        const price = subscription.pricing[selectedCountry.code];
        if (!price) return total;
        
        const monthlyPrice = billing === 'monthly' 
          ? price.monthly 
          : (price.yearly || price.monthly * 12) / 12;
        
        return total + monthlyPrice;
      }, 0);

    return { selectedCount, totalCount, categoryTotal };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Submerge</h1>
                <p className="text-sm text-gray-600">Subscription Calculator</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-gray-500" />
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCountry.code}
                onChange={(e) => setSelectedCountry(countries.find(c => c.code === e.target.value) || countries[0])}
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Subscription Selection */}
          <div className="lg:col-span-3 space-y-4">
            {Object.entries(groupedSubscriptions).map(([category, subs]) => {
              const isExpanded = expandedCategories.has(category);
              const stats = getCategoryStats(category, subs);

              return (
                <div key={category} className="border border-gray-200 rounded-lg bg-white">
                  <div 
                    className="px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center mr-4">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                        </div>
                        <div 
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: getCategoryColor(category) }}
                        />
                        <h2 className="text-lg font-semibold text-gray-900">
                          {getCategoryName(category)}
                        </h2>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">
                          {stats.selectedCount}/{stats.totalCount} selected
                        </span>
                        {stats.categoryTotal > 0 && (
                          <span className="font-semibold text-gray-900">
                            {selectedCountry.symbol}{stats.categoryTotal.toFixed(2)}/mo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {subs.map(subscription => {
                          const isSelected = selectedSubscriptions.find(s => s.subscription.id === subscription.id);
                          const pricing = subscription.pricing[selectedCountry.code];
                          
                          return (
                            <div 
                              key={subscription.id}
                              className={`border rounded-lg p-4 transition-all cursor-pointer ${
                                isSelected 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                              }`}
                              onClick={() => isSelected ? removeSubscription(subscription.id) : addSubscription(subscription)}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900 text-sm">{subscription.name}</h3>
                                </div>
                                {isSelected ? (
                                  <Minus className="w-4 h-4 text-red-600 ml-2" />
                                ) : (
                                  <Plus className="w-4 h-4 text-gray-400 ml-2" />
                                )}
                              </div>
                              
                              {pricing && (
                                <div className="mb-3">
                                  <p className="text-base font-semibold text-gray-900">
                                    {selectedCountry.symbol}{pricing.monthly}
                                    <span className="text-xs font-normal text-gray-500">/mo</span>
                                  </p>
                                  {pricing.yearly && (
                                    <p className="text-xs text-gray-600">
                                      {selectedCountry.symbol}{pricing.yearly}/year
                                    </p>
                                  )}
                                </div>
                              )}
                              
                              {isSelected && (
                                <button
                                  className="w-full mt-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium transition-colors text-gray-700"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleBilling(subscription.id);
                                  }}
                                >
                                  {selectedSubscriptions.find(s => s.subscription.id === subscription.id)?.billing === 'monthly' ? 'Switch to Yearly' : 'Switch to Monthly'}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary & Chart */}
          <div className="space-y-6">
            {/* Total Summary */}
            <div className="border border-gray-200 rounded-lg bg-white p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Total Cost</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedCountry.symbol}{totalMonthly.toFixed(2)}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Yearly</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {selectedCountry.symbol}{totalYearly.toFixed(2)}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {selectedSubscriptions.length} active subscription{selectedSubscriptions.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Donut Chart */}
            {chartData.length > 0 && (
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Breakdown</h3>
                
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${selectedCountry.symbol}${value}`, 'Monthly Cost']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-2 mt-4">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {selectedCountry.symbol}{item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Subscriptions List */}
            {selectedSubscriptions.length > 0 && (
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Subscriptions</h3>
                
                <div className="space-y-2">
                  {selectedSubscriptions.map(({ subscription, billing }) => {
                    const pricing = subscription.pricing[selectedCountry.code];
                    const cost = billing === 'monthly' 
                      ? pricing?.monthly 
                      : (pricing?.yearly || pricing?.monthly * 12) / 12;
                    
                    return (
                      <div key={subscription.id} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                        <div className="flex items-center">
                          <div className="mr-3">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: getCategoryColor(subscription.category) }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{subscription.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{billing} billing</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {selectedCountry.symbol}{cost?.toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
